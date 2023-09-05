import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex justify-between p-5 bg-[#016A70]">
      <div className="text-white font-bold fw-50">Note Taker</div>
      <div className="">
        <Link href={'/addNote'}>
        <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          AddNote
        </button>
        </Link>
      </div>
    </div>
  );
}
