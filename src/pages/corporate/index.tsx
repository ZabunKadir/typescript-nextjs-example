//components
import ImageComponent from "@/components/imageComponent";
import Layout from "@/components/layout";
import NavbarInPage from "@/components/navbarInPage";
import { useState } from "react";

//utils
import { useIntl } from "react-intl";

//variables
const navbarItems = [
  {
    text: "corporate.navbar-text-1",
    pageValue: "about-us",
    image: null,
    info: `Phasellus a magna eleifend, sagittis tortor consequat, auctor metus. Curabitur at justo condimentum, bibendum nisi sed, bibendum mi. Maecenas sit amet lectus id orci pharetra mattis. Duis pretium et turpis eget dictum. Nulla vitae ultricies turpis, sit amet vehicula ligula. Integer placerat, dui at hendrerit semper, dolor enim dignissim velit, sed fringilla urna nibh at tortor. Morbi malesuada auctor ex, eget pulvinar lorem vestibulum sit amet. Phasellus euismod ligula sit amet viverra volutpat. Sed eget lacus est. Sed vel gravida sem. In viverra sapien sit amet hendrerit varius. Nullam blandit mi sed tellus ultricies tempus. Pellentesque eros dolor, laoreet quis tortor interdum, malesuada vestibulum nulla. Cras finibus efficitur tincidunt. Suspendisse sit amet rhoncus magna, non suscipit urna. Nulla ut mi id nunc aliquet tristique ac in nibh.

    Fusce vehicula leo non quam aliquet elementum. Vestibulum maximus ut tortor vel tempus. Donec consectetur erat tellus, id blandit ex venenatis id. Vestibulum lobortis tincidunt odio, ac finibus nisi tristique sit amet. Etiam placerat eget est eu feugiat. Cras aliquet augue id elit tempus varius. Curabitur ullamcorper sollicitudin erat scelerisque pulvinar. Etiam non quam enim. Donec aliquam tellus ut accumsan semper. Donec pellentesque nibh nisi, eget tristique nibh facilisis non. Nullam leo lectus, tincidunt non maximus non, ornare non eros. Donec id tellus augue. Aenean lobortis, nisi a sagittis laoreet, nulla orci egestas quam, eu rhoncus nunc velit nec libero. Pellentesque dignissim et nulla non vulputate. Sed sollicitudin rutrum metus quis viverra.`,
  },
  {
    text: "corporate.navbar-text-2",
    pageValue: "mission",
    image: null,
    info: `Quisque cursus nec magna eget feugiat. Proin vehicula nisl at consectetur pulvinar. Nunc vitae sem a velit scelerisque tristique vel nec lectus. Proin condimentum, nibh eu semper vehicula, dolor ipsum ornare lacus, quis porttitor ex sapien vestibulum magna. Etiam lobortis leo erat, et venenatis orci viverra vel. Suspendisse elit ligula, consectetur ut erat quis, venenatis condimentum sapien. Quisque vitae purus convallis, dictum est eu, tempor arcu. In tristique ut libero ac sodales. Quisque consequat tortor odio, ut mattis enim mollis sit amet. Cras vel commodo quam. Aenean hendrerit convallis risus eu lacinia. Nullam interdum, urna a luctus pharetra, diam turpis egestas sem, at egestas diam leo id velit. Vivamus magna felis, accumsan vel est sit amet, elementum lacinia erat. Donec a metus eget velit vulputate blandit vel ut magna. Morbi at lorem sed sapien commodo pellentesque in vitae orci.

    Integer cursus libero sed libero porttitor molestie. Etiam fermentum aliquam mauris quis sodales. Quisque scelerisque blandit lectus, in porta tellus placerat in. In et orci scelerisque, consectetur sapien mattis, euismod est. Proin vitae magna eget est finibus bibendum ac vitae tortor. Ut bibendum nulla nec purus euismod auctor. Duis accumsan rhoncus ornare. Quisque laoreet nisi tempor lacinia commodo. Nullam vestibulum convallis malesuada. Aliquam ante massa, rhoncus at vehicula a, finibus at nibh.`,
  },
  {
    text: "corporate.navbar-text-3",
    pageValue: "vision",
    image: null,
    info: `Curabitur bibendum vulputate sem in tempor. Aliquam sem ante, aliquam in gravida vitae, varius nec erat. Donec et neque a nisl auctor blandit ac eget felis. Sed dictum venenatis turpis, sit amet pretium dui volutpat quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In lectus lectus, iaculis vel risus in, scelerisque laoreet nulla. Vivamus non purus vel augue fringilla lacinia quis ut tellus. Pellentesque sodales semper luctus. Cras a vehicula massa. Nulla at eros ante. In vitae suscipit arcu. Mauris volutpat felis sem, eu efficitur sem blandit vitae. Nunc egestas, lorem eget pretium laoreet, nulla ligula egestas sem, at mollis dolor massa at diam. Fusce ultricies tellus vitae pharetra accumsan. Mauris pharetra ante augue, ut sodales dui pulvinar eget. Cras sodales a ante quis aliquam.`,
  },
  {
    text: "corporate.navbar-text-4",
    pageValue: "quality-policy",
    image: null,
    info: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Donec eleifend facilisis dapibus. Duis mattis ornare lorem,
    id viverra quam aliquam ut. Praesent justo justo, ornare
    eget elit at, consequat aliquam augue. Ut pharetra pulvinar
    egestas. Curabitur nisi diam, aliquam eget ante vel,
    vestibulum commodo nunc. Curabitur imperdiet aliquet purus.
    Etiam sed dapibus risus. Suspendisse egestas, lectus ut
    porta scelerisque, arcu massa iaculis risus, id sollicitudin
    diam massa sed libero. Integer consectetur, elit facilisis
    viverra varius, eros ante fringilla elit, ac pretium tortor
    nisl vel massa. Nulla non aliquam eros. Phasellus ac ligula
    mattis, elementum sem non, vehicula est. Duis vulputate,
    nulla et commodo hendrerit, massa nunc tincidunt lectus, nec
    rutrum nibh ligula vitae enim. Curabitur bibendum rhoncus
    ullamcorper. Proin convallis dolor a nibh congue
    ullamcorper. Mauris pretium enim ut urna iaculis venenatis.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Morbi quis justo fermentum, rutrum elit et, finibus nunc.
    Pellentesque ut feugiat lacus. Vestibulum sed lacus feugiat,
    efficitur magna vel, convallis lectus. Nulla eu ipsum vel
    massa vulputate scelerisque sit amet ut ligula. In sit amet
    metus quis mauris tincidunt pellentesque ut consectetur
    lorem. Aenean in ipsum in dolor faucibus egestas. Curabitur
    a metus vulputate, luctus ante at, tempus arcu. In hac
    habitasse platea dictumst. Duis efficitur enim at blandit
    gravida. Donec eu dapibus nulla. In enim dui, venenatis sit
    amet lorem non, convallis bibendum ipsum. Integer libero
    leo, sollicitudin sed turpis nec, tempor scelerisque mauris.
    Fusce id est augue. Pellentesque habitant morbi tristique
    senectus et netus et malesuada fames ac turpis egestas.`,
  },
];

const CorporatePage = () => {
  const intl = useIntl();
  const [activePage, setActivePage] = useState(navbarItems[0].pageValue);

  return (
    <Layout>
      <div className="flex w-full flex-col justify-between items-center tablet:items-start tablet:flex-row p-12 laptop:px-52 min-h-[400px] space-x-6">
        <NavbarInPage
          title={intl.formatMessage({ id: "corporate.title" })}
          items={navbarItems}
          activePage={activePage}
          activePageAction={setActivePage}
        />

        {navbarItems.map(
          (item, index) =>
            activePage === item.pageValue && (
              <div key={index} className="flex flex-col w-full space-y-4">
                <h3 className="text-h4 border-b border-gray-400 pb-2">
                  {intl.formatMessage({ id: item.text })}
                </h3>
                <div className="flex flex-col w-full space-y-6 laptop:space-y-0 laptop:space-x-6 desktop:flex-row">
                  <p className="flex w-full break-words">{item.info}</p>
                  <div className="flex min-w-max items-center justify-center relative overflow-hidden ">
                    <ImageComponent
                      src={item.image ? item.image : "/images/emptyImage.jpg"}
                      className=" max-w-[320px] h-[240px] border border-gray-400 rounded-lg"
                      width={320}
                      height={196}
                      alt="Corporate image"
                    />
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </Layout>
  );
};
export default CorporatePage;
