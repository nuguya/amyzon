const carousellText = (title, section, navigation) => {
  return `<div class="minicarousell__title"><h2>${title}</h2></div>
          <div class="minicarousell__section"><p>${section}</p></div>
          <div class="minicarousell__navigation"><a href="https://www.primevideo.com/?ref_=dvm_pds_amz_KR_kc_s_g|c_231853434446_m_sEGEieZv-dc_s__"><p>${navigation}</p></a></div> `;
};

module.exports = carousellText;
