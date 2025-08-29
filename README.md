answer-1: getElementID works as a single element.
          getElementsByClassName works as selects all elements with that class.
          querySelector works as selects the first element matching any CSS selector.
          querySelectorAll works as a selects all elements matching a CSS selector (returns NodeList).
answer-2: We can create a new element like a <div> or <p> in JavaScript. Then we add content to it, like text or other elements. 
          Finally, we insert it into the page by attaching it to an existing element, such as the body or a specific container, so it appears on the page.
answer-3: When an event happens on an element, it first runs on that element and then moves up to its parent elements.
          For example, clicking a button can also trigger events on the div or body that contains it.
answer-4: Instead of adding events to many child elements, we can add one event listener to the parent element. Thanks to bubbling, the parent can handle events from its children.
          This is useful for dynamic elements or when we want to reduce many event listeners.
answer-5: preventDefault() stops the browser’s default action (like following a link or submitting a form).
          stopPropagation() stops the event from bubbling up to parent elements.
