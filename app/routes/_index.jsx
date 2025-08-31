import {redirect} from '@shopify/remix-oxygen';

// Kill the old Claude-built root. Always send "/" to the static site.
export async function loader() {
  return redirect('/index.html', 302);
}

export default function Index() { return null; }
