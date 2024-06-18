import React, { useEffect, useRef } from 'react';
import * as powerbi from 'powerbi-client';
import 'bootstrap/dist/css/bootstrap.min.css';

const PowerBiEmbed = () => {
  const embedContainer = useRef(null);

  useEffect(() => {
    const embedUrl = "https://app.powerbi.com/reportEmbed?reportId=792cf0a7-7bfd-4007-8b66-12f66d80b598&autoAuth=true&ctid=8ba02f42-a433-4ad5-bdab-0103a1bc5fa5";
    const reportId = "792cf0a7-7bfd-4007-8b66-12f66d80b598";
    const embedConfig = {
      type: 'report',
      id: reportId,
      embedUrl: embedUrl,
      accessToken: '', // Add your access token here if needed
      tokenType: powerbi.models.TokenType.Embed,
      settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: false
      }
    };

    const powerbiService = new powerbi.service.Service(powerbi.factories.hpmFactory, powerbi.factories.wpmpFactory, powerbi.factories.routerFactory);
    powerbiService.embed(embedContainer.current, embedConfig);

  }, []);

  return (
    <div className="disease-dashboard d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <h1 style={{ fontFamily: 'Perfect Dark BRK', fontSize: '3rem', marginBottom: '20px' }}>Top Disease Analytics</h1>
      <div ref={embedContainer} style={{ width: '1000px', height: '827px' }}></div>
    </div>
  );
}

export default PowerBiEmbed;
