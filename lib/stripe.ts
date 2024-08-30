import Stripe from "stripe";

// Kreira instancu Stripe klijenta koristeći tajni ključ iz okruženja
export const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
  typescript: true,
});