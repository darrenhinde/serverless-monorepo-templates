import { useState } from 'react';

type Product = 'premium' | 'exclusive';

export const useStripeCheckout = () => {
  const [loading, setLoading] = useState<Product | null>(null);

  const handleCheckout = async (product: Product) => {
    setLoading(product);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        body: JSON.stringify({ product }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('Error creating checkout session');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(null);
    }
  };

  return { handleCheckout, loading };
};
