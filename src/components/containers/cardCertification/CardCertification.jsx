import React from 'react';
import PropTypes from 'prop-types';
import LanguageContext from '../../../context/language/LanguageContext.js';
import ThemeContext from '../../../context/theme/ThemeContext.js';
import './cardCertification.css';

function CardCertification({ certification, text })
{
  const {
    logoCertification,
    nameCertification,
    companyCertification,
    dateCertificationSpanish,
    dateCertificationEnglish,
    credentialCertification,
  } = certification;

  const { languageValue } = React.useContext(LanguageContext);
  const { themeValue } = React.useContext(ThemeContext);

  return (
    <div className="card-certification" data-aos="zoom-out-up">
      <img src={logoCertification} alt={nameCertification} loading="lazy" />
      <div className={`card-container ${themeValue ? 'card-container-lt' : 'card-container-dt'}`}>
        <h3>{nameCertification}</h3>
        <h4>{companyCertification}</h4>
        <h5>{languageValue ? dateCertificationSpanish : dateCertificationEnglish}</h5>
        <p>{`${text} certiport: ${credentialCertification}`}</p>
      </div>
    </div>
  );
}

CardCertification.propTypes = {
  certification: PropTypes.objectOf(
    PropTypes.oneOfType(
      [
        PropTypes.string,
        PropTypes.array,
      ],
    ),
  ).isRequired,
  text: PropTypes.string.isRequired,
};

export default CardCertification;
