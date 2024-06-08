import Link from 'next/link';
import UserPage from './users/page';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/users">
        <h1>Users</h1>
      </Link>
    </div>
  );
}
