export const Tooltip = ({ content, className }) => {
  return (
    <span
      className={`absolute inline-flex items-end justify-center px-1 py-1 text-sm -translate-x-2 -translate-y-5 bg-gray-200 rounded-lg outline outline-1 outline-gray-300 ${className}`}
    >
      {content}
      <div className="translate-y-2" data-popper-arrow></div>
    </span>
  );
};
