async function getData() {
  const res = await fetch("http://127.0.0.1:5000");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    const text = await res.text();
    throw new Error(`Failed to fetch data, ${text}, ${res.status}`);
  }

  return res.text();
}

export default function Test() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {getData()}
    </main>
  );
}
