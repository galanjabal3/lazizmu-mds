import ovo from "@/assets/logo-ovo.png";
import dana from "@/assets/logo-dana.png";
import linkAja from "@/assets/logo-link-aja.png";
import indomaret from "@/assets/logo-Indomaret.png"
import alfamart from "@/assets/AlfaMart.png";
import Bca_va from "@/assets/logo-bca-va.png";
import Bni_va from "@/assets/logo-bni-va.png";
import bca from "@/assets/logo-bca.png";
import mandiri from "@/assets/logo-mandiri.png";

export default {
  name: "pembayaran",
  data() {
    return {
      logo_image: [
        {
          image: ovo,
        },
        {
          image: dana,
        },
        {
          image: linkAja,
        },
        {
          image : indomaret,
        },
        {
          image : alfamart,
        }
      ],
      logo_image_bank: [
        {
          image: Bca_va,
        },
        {
          image: Bni_va,
        },
        {
          image: bca,
        },
        {
          image: mandiri,
        },
      ],
      beritaEkonomi:[],
      beritaSosial: [],
      beritaAll:[]
    };
  },
  methods: {
    getDataSesionNews() {
      // let beritaEkonomi = sessionStorage.getItem("beritaEkonomi");
      // this.beritaEkonomi = JSON.parse(beritaEkonomi);
      // let beritaSosial = sessionStorage.getItem("beritaEkonomi");
      // this.beritaSosial = JSON.parse(beritaSosial);
      let beritaAll = sessionStorage.getItem("beritaAll");
      this.beritaAll = JSON.parse(beritaAll);
    },
  },
  mounted() {
    this.getDataSesionNews();
    window.scrollTo(0, 0);
  },
};
