import { showConnect } from '@stacks/connect';
import { userSession } from '../userSession';
import Image from 'next/image'

const myAppName = 'My Stacks Web-App'; // shown in wallet pop-up
// const myAppIcon = window.location.origin + './logo.png'; // shown in wallet pop-up
const myAppIcon = <Image src="/logo.png" alt="logo" width={72} height={16} /> // shown in wallet pop-up
// const myAppIcon = '/logo.png'; // shown in wallet pop-up
// const myAppIcon = window.location.origin + '/my_logo/my_logo.png'; // shown in wallet pop-up

showConnect({
  userSession, // `userSession` from previous step, to access storage
  appDetails: {
    name: 'My Stacks Web-App',
    icon: "/logo.png", // shown in wallet pop-up
  },
  onFinish: () => {
    window.location.reload(); // WHEN user confirms pop-up
  },
  onCancel: () => {
    console.log('oops'); // WHEN user cancels/closes pop-up
  },
});