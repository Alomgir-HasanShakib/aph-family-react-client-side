import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/authcontext/Authentication";
import Swal from "sweetalert2";

const CheckOut = ({ amount, id }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axiosSecure.post("/create-payment-itent", { price: amount }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [amount, axiosSecure]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Anonymous",
            name: user?.displayName || "Anonymous",
          },
        },
      });
    if (confirmError) {
      console.log("Confirm Error");
    } else {
      console.log("Payment Intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("Transection id is", paymentIntent.id);

        const payment = {
          email: user?.email,
          userName: user?.displayName,
          transectionId: paymentIntent.id,
          date: new Date(), // utc date convert using momment.js
          campaignID: id,
          amount: amount,
        };
        if (amount > 0) {
          const res = await axiosSecure.post("/payments", payment);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Donation Send😊",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        className="border border-b-blue-900 py-3 px-5 mb-8"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        className="bg-blue-900 px-4 py-2 rounded-lg text-white"
        disabled={!stripe || !clientSecret}
      >
        Donate
      </button>
    </form>
  );
};

export default CheckOut;
