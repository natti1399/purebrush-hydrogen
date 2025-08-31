import {redirect} from '@shopify/remix-oxygen';

export async function loader() {
  return redirect('/index.html', 301);
}

export default function BrilLegacyRedirect() { return null; }

