type CustomTitleProps = {
  title: string;
};
export const CustomTitleRed = ({ title }: CustomTitleProps) => {
  return (
    <div className="flex items-center w-full gap-2">
      <div className="w-3 h-8 bg-red-700 rounded-sm" />
      <h2 className="text-base text-red-700">{title}</h2>
    </div>
  );
};

export const CustomTitle = ({ title }: CustomTitleProps) => {
  return <h2 className="text-lg md:text-2xl font-semibold">{title}</h2>;
};
