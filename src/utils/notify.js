import { toast } from 'react-toastify';


export const notify = (type) => {
  switch (type) {
    case "effacé":
      return toast.warning(`Votre commentaire est ${type} !`);
    case "envoyé":
      return toast.success(`Votre commentaire est ${type} !`)
    case "bye bye":
      return toast.info(`${type} !`)
    default:
      break;
  }
}
