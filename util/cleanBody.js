export const cleanArticleBody = (str) => {

  if ((str === null) || (str === '')) {
    return false;
  } else {
    return str
      .replace(/(<p>|<\/p>)/g, '')
      .replace(/(<blockquote class="wp-block-quote">|<\/blockquote>)/g, '')
      .replace(/(<ol>|<\/ol>)/g, '')
      .replace(/(<ul>|<\/ul>)/g, '')
      .replace(/(<h2>|<\/h2>)/g, '')
      .replace(/(<div>)/g, '')
      .replace(/(<p id="fb-root">|<\/p>)/g, '')
      .replace(/(<table class="">|<\/table>)/g, '')
    //.replace('<script async defer src="//platform.instagram.com/en_US/embeds.js"></script>','')
    //.replace('<script async defer src="//www.instagram.com/embed.js"></script>','')
  }
};

export const cleanJSExternal = ( str ) => {
  const platformInsta = 'platform.instagram.com/en_US/embeds.js';
  const embedInsta = 'www.instagram.com/embed.js';
  const platformTwi = 'platform.twitter.com/widgets.js';
  const playerOoyala = 'player.ooyala.com';
  const playwire = 'cdn.playwire.com';
  const jwpsrv = 'jwpsrv';
  const mediageuzen = 'mediageuzen';
  const tiktok = 'tiktok';

  const regExScript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gm;
  const regExIframe = /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gm;
  let ampIframe = '';

  if( str.includes(platformInsta) || str.includes(embedInsta) || str.includes(platformTwi)
    || str.includes(playerOoyala) || str.includes(playwire) || str.includes(jwpsrv)
    || str.includes(mediageuzen) || str.includes(tiktok) ) {

    return str.replace(regExScript, '');

  } else if ( str.includes('iframe') ) {

    if ( str.includes('facebook') ) {
      return str.replace(regExIframe, '');

    } else if ( str.includes('jwplayer') ) {
      return str.replace(regExIframe, '');

    } else if ( str.includes('giphy') ) {
      ampIframe = `<amp-iframe width=${parseIframe(str).width}
                        height=${parseIframe(str).height}
                        layout="responsive"
                        sandbox="allow-scripts allow-same-origin allow-popups"
                        frameborder="0"
                        src=${parseIframe(str).src}/>`;
      return str.replace(regExIframe, ampIframe);
    }

  } else if ( ( str.includes('<p id="fb-root"') && str.includes('<script') ) || str.includes('facebook') || str.includes('imgur') ) {
    return str.replace(regExScript, '');

  }else {
    return str;
  }

};

export const cleanScript = (str) => {
  const regEx = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gm;
  return str.replace(regEx, '');
};

export const cleanIframe = (str) => {
  const regEx = /<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gm;
  return str.replace(regEx, '');
};

export const parseIframe = (str) => {
  const regEx = /(src|width|height)=["']([^"']*)["']/gi;
  let datosIframe = {
    src: "",
    width: "",
    height: ""
  };

  str.replace(regEx, function (all, typeStr, value) {
    if (typeStr === "src") {
      datosIframe.src = value;
    }

    if (typeStr === "width") {
      datosIframe.width = value;
    }

    if (typeStr === "height") {
      datosIframe.height = value;
    }
  });
  return datosIframe;
};

export const statusTwitter = (str) => {
  const regEx = /(^|[^'"])(https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(?:es)?\/(\d+))/;

  let datosIframe = {
    statusUrl: "",
    statusId: ""
  };

  str.replace(regEx, ((url, str, all, userTw, id) => {
    if (id.includes('/</div>')) {

      datosIframe.statusId = id.replace('/</div></figure>', '');
      datosIframe.statusUrl = url.replace('/</div></figure>', '');

    } else if (id.includes('/')) {

      datosIframe.statusId = id.replace('/', '');

    } else {

      datosIframe.statusId = id;
      datosIframe.statusUrl = url;

    }

  }));

  return datosIframe;
};

export const statusInstagram = (str) => {
  const regEx = /(https?:\/\/(?:www\.)?instagram\.com\/p\/([^?#&]+)).*/g;

  let datosIframe = {
    statusUrl: "",
    statusId: ""
  };

  str.replace(regEx, ((url, all, id) => {

    const newId = id.replace(/(<([^>]+)>)/g, '').replace(/\s/g, '').replace(/(\?.*)?/g, '').replace('/', '');
    const newUrl = url.replace(/(<([^>]+)>)/g, '').replace(/\s/g, '').replace(/(\?.*)?/g, '').replace(/\/?$/g, '');

    //console.log('regEx url', newUrl)
    //console.log('regEx id', newId)

    datosIframe.statusId = newId;
    datosIframe.statusUrl = newUrl;

    /*if (id.includes('/</div>')) {
        datosIframe.statusId = id.replace(/(<([^>]+)>)/g, '').replace(/\s/g, '');
        datosIframe.statusUrl = url.replace(/(<([^>]+)>)/g, '').replace(/\s/g, '');
    } else if (id.includes('/')) {
        datosIframe.statusId = id.replace(/(<([^>]+)>)/g, '').replace(/\s/g, '').replace('/', '');
    } else {
        datosIframe.statusId = id.replace(/(<([^>]+)>)/g, '').replace(/\s/g, '');
        datosIframe.statusUrl = url.replace(/(<([^>]+)>)/g, '').replace(/\s/g, '');
    }*/

    // console.log('datosIframe', datosIframe)

  }));

  return datosIframe;
};

export const statusVimeo = (str) => {
  const regEx = /(http|https)?:\/\/(www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|)(\d+)(?:|\/\?)/g;

  let statusId = '';

  str.replace(regEx, ((url, http, all, blank, id) => {
    statusId = id;
  }));

  return statusId;
};

export const statusYoutube = (str) => {
  const regEx = /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=))([\w\-]{10,12})\b/;

  let statusId = '';

  str.replace(regEx, ((url, id) => {
    statusId = id;
  }));

  return statusId;
};

export const embedHtmlTwitter = (str) => {
  const regEx = /http(?:s)?:\/\/(?:www\.)?twitter\.com\/([A-Za-z0-9\-\_]+)\/([A-Za-z]+\/[a-zA-Z0-9_]+)/g;

  let urlStatus = '';

  str.replace(regEx, ((href, url) => {
    urlStatus = href;
  }));

  return urlStatus;
};

export const statusFacebook = (str) => {
  const regEx = /^http(?:s?):\/\/(?:www\.|web\.|m\.)?facebook\.com\/([A-z0-9\.]+)\/videos(?:\/[0-9A-z].+)?\/(\d+)(?:.+)?$/;

  let idVideo = '';

  str.replace(regEx, ((url,medio,video) => {
    idVideo = video;
  }))

  return idVideo;
};

