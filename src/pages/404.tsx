//components
import Button from "@/components/button";
import Layout from "@/components/layout";

//utils
import { useIntl } from "react-intl";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const ErrorPage = () => {
  const intl = useIntl();
  return (
    <Layout>
      <div className="flex w-full flex-col justify-center items-center tablet:items-start tablet:flex-row p-12 laptop:px-52 min-h-[400px] space-x-6">
        <div className="flex flex-col w-full max-w-[540px] items-center justify-center border border-gray-400 rounded-lg shadow-md shadow-warning p-6  mobile:p-12 space-y-12">
          <div className="flex flex-col text-center w-full space-y-4 tablet:space-y-0 tablet:space-x-4 tablet:flex-row">
            <span className="text-[56px] break-words items-center border-b-4 tablet:border-r-4 tablet:border-b-0 border-gray-700 px-6 font-bold text-primary-main">
              404
            </span>
            <span className="flex justify-center break-words text-gray-700 text-title-big mobile:text-[28px] items-center ">
              {intl.formatMessage({ id: "404.not-found" })}
            </span>
          </div>
          <Link href={"/"}>
            <Button
              icon={faHome}
              text={intl.formatMessage({ id: "404.go-home" })}
            />
          </Link>
        </div>
      </div>
    </Layout>
  );
};
export default ErrorPage;
