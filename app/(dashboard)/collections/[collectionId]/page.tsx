"use client"

import { useEffect, useState } from "react"

import Loader from "@/components/custom ui/Loader"
import CollectionForm from "@/components/collections/CollectionForm"

// Komponenta CollectionDetails za prikaz i upravljanje detaljima kolekcije
const CollectionDetails = ({ params }: { params: { collectionId: string }}) => {
  const [loading, setLoading] = useState(true)
  const [collectionDetails, setCollectionDetails] = useState<CollectionType | null>(null)

  useEffect(() => {
    const getCollectionDetails = async () => {
      try {
        const res = await fetch(`/api/collections/${params.collectionId}`, {
          method: "GET",
        });
        const data = await res.json();
        setCollectionDetails(data);
        setLoading(false);
      } catch (err) {
        console.log("[collectionId_GET]", err);
      }
    };
    
    getCollectionDetails();
  }, [params.collectionId]);

  return loading ? <Loader /> : <CollectionForm initialData={collectionDetails} />;
}

export const dynamic = "force-dynamic"; // Dinamičnost stranice
export default CollectionDetails;
