//components
import Layout from "@/components/layout";

//utils
import { useIntl } from "react-intl";
import {
  faEnvelope,
  faLocationPin,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Input from "@/components/inputComponent";
import { useState } from "react";
import Button from "@/components/button";

const ContactPage = () => {
  const intl = useIntl();
  const [warningModal, setWarningModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <Layout>
      <div className="flex w-full flex-col space-y-4 p-4 tablet:flex-row">
        <div className="flex w-full flex-col gap-2 justify-between items-center flex-wrap my-4 tablet:justify-center tablet:w-1/2 tablet:space-y-6">
          <Link
            className="flex items-center hover:text-primary-mid text-title-medium min-w-[240px]"
            href={`tel:${"0544 444 44 44"}`}
          >
            <FontAwesomeIcon
              className="flex text-primary-main mr-3"
              size="lg"
              icon={faPhone}
            />
            0544 444 44 44
          </Link>

          <Link
            className="flex items-center hover:text-primary-mid text-title-medium min-w-[240px]"
            href={`mailto:${"info@examples.com"}`}
          >
            <FontAwesomeIcon
              className="flex text-primary-main mr-3"
              size="lg"
              icon={faEnvelope}
            />
            info@examples.com
          </Link>

          <Link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-primary-mid text-title-medium min-w-[240px]"
            href={"https://www.google.com/maps/place/Bal%C4%B1kesir"}
          >
            <FontAwesomeIcon
              className="flex text-primary-main mr-3"
              size="lg"
              icon={faLocationPin}
            />
            Example location in Turkey
          </Link>
        </div>
        <div className="flex flex-col w-full justify-center p-4 bg-gray-50 rounded-lg max-w-[540px] tablet:w-1/2">
          <span className="flex w-full text-title-medium font-bold border-b-2 border-white py-1">
            {intl.formatMessage({ id: "contact.send-message" })}
          </span>
          <form className="flex flex-col w-full space-y-6 py-4">
            <div className="flex w-full space-x-6">
              <Input
                label={intl.formatMessage({ id: "contact.name" })}
                id="name"
                name="name"
                value={formData.name}
                maxLength={24}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <Input
                label={intl.formatMessage({ id: "contact.phone" })}
                id="phone"
                name="phone"
                value={formData.phone}
                maxLength={11}
                maxLengthPermission={true}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div className="flex w-full space-x-6">
              <Input
                label={intl.formatMessage({ id: "contact.email" })}
                id="email"
                name="email"
                value={formData.email}
                maxLength={24}
                type="email"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <Input
                label={intl.formatMessage({ id: "contact.subject" })}
                id="subject"
                name="subject"
                value={formData.subject}
                maxLength={16}
                maxLengthPermission={true}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
              />
            </div>
            <label className="flex w-full text-gray-500 flex-col">
              {intl.formatMessage({ id: "contact.message" })}
              <textarea
                rows={5}
                cols={32}
                maxLength={240}
                required={true}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="flex w-full outline-warning ring-0 pl-1 mt-1 text-primary-mid resize-none"
              />
            </label>
            <Button
              className="w-full"
              type="submit"
              icon={faPaperPlane}
              text={intl.formatMessage({ id: "contact.send-message" })}
            />
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default ContactPage;
