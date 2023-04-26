//components
import ImageComponent from "@/components/imageComponent";
import Layout from "@/components/layout";

const DefenseIndustryProducts = () => {
  return (
    <Layout>
      <div className="flex w-full flex-col justify-between items-center tablet:items-start tablet:flex-row p-12 laptop:px-52 min-h-[400px] space-x-6">
        <p className="flex w-full break-words max-w-[960px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          eleifend facilisis dapibus. Duis mattis ornare lorem, id viverra quam
          aliquam ut. Praesent justo justo, ornare eget elit at, consequat
          aliquam augue. Ut pharetra pulvinar egestas. Curabitur nisi diam,
          aliquam eget ante vel, vestibulum commodo nunc.
        </p>
        <div className="flex min-w-max items-center justify-center relative overflow-hidden ">
          <ImageComponent
            src={"/images/emptyImage.jpg"}
            className=" max-w-[320px] h-[240px] border border-gray-400 rounded-lg"
            width={320}
            height={240}
            alt="Corporate image"
          />
        </div>
      </div>
    </Layout>
  );
};
export default DefenseIndustryProducts;
