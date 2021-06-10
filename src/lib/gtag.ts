type ContactEvent = {
  action: 'submit_form';
  category: 'contact';
  label: string;
};

type ClickEvent = {
  action: 'click';
  category: 'other';
  label: string;
};

type Event = ContactEvent | ClickEvent;

export const GA_ID = 'UA-199111214-1';

// IDが取得できない場合を想定する
export const existsGaId = GA_ID !== null;

// PVを測定する
export const pageview = (path) => {
  window.gtag('config', GA_ID, {
    page_path: path,
  });
};

export const event = ({ action, category, label }: Event) => {
  if (!existsGaId) {
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
  });
};
