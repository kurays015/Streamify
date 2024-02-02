export default function RegisterError({ errors }) {
  return (
    <>
      {Object.keys(errors).length > 0 && (
        <div className="text-red-500 text-sm mt-1">
          {Object.values(errors).map((error, index) => (
            <p key={index}>{error.message}</p>
          ))}
        </div>
      )}
    </>
  );
}
