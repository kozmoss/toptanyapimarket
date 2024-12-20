import { getFirestore, doc, setDoc } from "firebase/firestore";
import firebase_app from "./config";

const db = getFirestore(firebase_app);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function addData(colllection: string, id: string, data: any) {
  let result = null;
  let error = null;

  try {
     await setDoc(doc(db, colllection, id), data, {
      merge: true,
    });
    result = {success: true, message :"Form Başarıyla Kaydedildi."}
  } catch (e) {
    error = e;
  }
  return { result, error };
}
