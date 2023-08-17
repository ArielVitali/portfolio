function FooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        &copy; {new Date().getFullYear()}
        <span> All Rights Reserved, Ariel Vitali.</span>
      </div>
    </div>
  );
}

export default FooterCopyright;
