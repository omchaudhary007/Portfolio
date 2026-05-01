export default function Resume() {
  return (
    <div className="py-8 flex flex-col gap-3">
      <h3 className="text-xl opacity-90">Resume</h3>
      <p className="text-sm opacity-70">
        View and download my professional resume.
      </p>
      <div className="w-full my-6 border-b-2 border-foreground/10"></div>
      <iframe
        className="h-100 md:h-screen w-full"
        src="https://drive.google.com/file/d/1uqmT6uNdFcLPu_JumUpfU30wbtHe7fMa/preview"
      ></iframe>
    </div>
  );
}
