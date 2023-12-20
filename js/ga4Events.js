function getDiffInSecForTimestamp(a, b) {
  if (!a || !b) {
    return undefined;
  }
  const diffInMs = a - b;
  const diffInSec = diffInMs / 1000;

  return diffInSec;
}

function setupSendOfInformationTextOpenCloseGA4EventsOnClick(elemSelector) {
  const elem = document.querySelector(elemSelector);
  const informationLabel = elem?.querySelector(".item-header__text")?.innerHTML;

  elem?.addEventListener("click", () => {
    const isOpenAction = elem.classList.contains("active");
    if (isOpenAction) {
      gtag('event', "information_text_block_open", {
        'event_category': "information_text_block",
        'event_label': informationLabel,
      });

      elem.setAttribute("data-open-time", new Date().getTime());

      return;
    } else {
      const anOpenTime = elem.getAttribute("data-open-time");
      elem.removeAttribute("data-open-time");
      const aDiffTime = getDiffInSecForTimestamp(new Date().getTime(), +anOpenTime);
  
      gtag('event', "information_text_block_close", {
        'event_category': "information_text_block",
        'event_label': informationLabel,
        ...(aDiffTime && { 'value': aDiffTime }),
      });

      return;
    }
  });  
}

[
  { selector: ".how-to-organize-teplytsya-block__item.area-item .collapsible" },
  { selector: ".how-to-organize-teplytsya-block__item.equipment-item .collapsible" },
  { selector: ".how-to-organize-teplytsya-block__item.team-item .collapsible" },
  { selector: ".how-to-organize-teplytsya-block__item.activities-item .collapsible" },
  { selector: ".how-to-organize-teplytsya-block__item.timetable-item .collapsible" },
  { selector: ".how-to-organize-teplytsya-block__item.security-item .collapsible" },
  { selector: ".how-to-organize-teplytsya-block__item.communication-item .collapsible" },
].forEach(({ selector }) => setupSendOfInformationTextOpenCloseGA4EventsOnClick(selector));
