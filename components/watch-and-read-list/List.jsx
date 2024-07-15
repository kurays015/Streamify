export default function List() {
  return <div className="text-white">favorites content... (fixing bug)</div>;
}

{
  /* <>
{lists.length > 0 ? (
  lists.map(list => (
    <div className="relative" key={list.id}>
      <FaRegCircleXmark
        className="absolute top-1 right-1 z-50 text-2xl text-slate-400 cursor-pointer"
        onClick={() => dispatch(filterList(list.id))}
      />
      <Link href={infoUrl(list)}>
        <Card {...list} list={true} />
      </Link>
    </div>
  ))
) : (
  <h1 className="text-slate-300 text-center text-sm absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
    No list added at the moment.
  </h1>
)}
</> */
}
