export const CustomButton = ({ title }: { title: string }) => {
  return (
    <button className="bg-red-700 text-white py-3 px-16 rounded-sm text-sm">
      {title}
    </button>
  );
};
