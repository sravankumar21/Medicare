import React, { useEffect } from 'react';

const TableauEmbed2 = () => {
  useEffect(() => {
    const divElement = document.getElementById('viz1718560078625');
    const vizElement = divElement.getElementsByTagName('object')[0];

    if (divElement.offsetWidth > 800) {
      vizElement.style.width = '1000px';
      vizElement.style.height = '827px';
    } else if (divElement.offsetWidth > 500) {
      vizElement.style.width = '1000px';
      vizElement.style.height = '827px';
    } else {
      vizElement.style.width = '100%';
      vizElement.style.height = '727px';
    }

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);

  }, []);

  return (
    <div className="tableau-embed">
      <div className="tableauPlaceholder" id="viz1718560078625" style={{ position: "relative" }}>
        <noscript>
          <button style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
            <img alt="Dashboard 2" src="https://public.tableau.com/static/images/Bo/BookINDIA1/Dashboard2/1_rss.png" style={{ border: "none" }} />
          </button>
        </noscript>
        <object className="tableauViz" style={{ display: "none" }}>
          <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
          <param name="embed_code_version" value="3" />
          <param name="site_root" value="" />
          <param name="name" value="BookINDIA1/Dashboard2" />
          <param name="tabs" value="no" />
          <param name="toolbar" value="yes" />
          <param name="static_image" value="https://public.tableau.com/static/images/Bo/BookINDIA1/Dashboard2/1.png" />
          <param name="animate_transition" value="yes" />
          <param name="display_static_image" value="yes" />
          <param name="display_spinner" value="yes" />
          <param name="display_overlay" value="yes" />
          <param name="display_count" value="yes" />
          <param name="language" value="en-GB" />
          <param name="filter" value="publish=yes" />
        </object>
      </div>
    </div>
  );
};

export default TableauEmbed2;
