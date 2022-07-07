function SignIns({ argss }) {
  return (
    <>
      <div className="h3 fw-bold text-center mt-5 pt-5">Sign {argss}</div>
      <div className="p text-primary text-center mt-5">
        <span className="p-4 bg-theme  br-theme">
          <img
            src="images/flat-color-icons_google.png"
            alt=""
            className="img-fluid mb-1 p-1"
          />
          Sign {argss} With Google
        </span>
      </div>
    </>
  );
}
export default SignIns;
