export default function NavbarSearchBox() {
  return (
    <div className="grow border border-light-gray rounded-2xl flex items-center gap-3 px-4 order-3 lg:order-1">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className="fill-dark-gray ">
          <path d="M15.7531 14.7188L11.5656 10.5312C12.4719 9.42188 12.9719 8.025 12.9719 6.5C12.9719 2.90937 10.0616 0 6.47188 0C2.88219 0 0 2.91031 0 6.5C0 10.0897 2.91001 13 6.47188 13C7.99657 13 9.39532 12.4716 10.5031 11.5925L14.6906 15.78C14.8656 15.9281 15.0594 16 15.25 16C15.4406 16 15.6338 15.9268 15.7803 15.7803C16.0719 15.4875 16.0719 15.0125 15.7531 14.7188ZM1.50001 6.5C1.50001 3.74312 3.74313 1.5 6.50001 1.5C9.25688 1.5 11.5 3.74312 11.5 6.5C11.5 9.25688 9.25688 11.5 6.50001 11.5C3.74313 11.5 1.50001 9.25625 1.50001 6.5Z"></path>
        </svg>
      </span>
      <input className="grow border-0 outline-0 py-2 text-org placeholder:text-dark-gray placeholder:text-sm" type="text" placeholder="جستجو محصول..." />
    </div>
  );
}
