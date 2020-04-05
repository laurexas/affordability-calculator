import { getRandomPerson } from "../utils/randomPerson";
import { getRandomAffordability } from "../utils/randomAffordability";

export const configureFakeBackend = () => {
  window.fetch = function (url) {
    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(handleRoute, 500);

      function handleRoute() {
        switch (true) {
          // alternatively includes can be used for cleaner solution but user accidentally can type them in search input
          case url.split("/")[2] === "person": {
            const value = url.split("/")[3];
            return getPerson(value);
          }
          case url.split("/")[2] === "affordability": {
            return getAffordability();
          }
          case url.split("/")[2] === "exposure": {
            const value = url.split("/")[3];
            return getExposure(value);
          }
          default:
            // pass through any requests not handled above
            return rejectCall();
        }
      }

      // mocked api calls

      function getPerson(value) {
        const person = getRandomPerson();
        const data = {
          id: value,
          name: person.name,
          last_name: person.last_name,
          affordability_id: person.affordability_id,
        };
        resolve(data);
      }

      function getAffordability() {
        const affordability = getRandomAffordability();
        const data = {
          affordability_max: { value: affordability.max, exposure_id: 1 },
          affordability_min: { value: affordability.min, exposure_id: 2 },
        };
        resolve(data);
      }

      function getExposure(value) {
        const data = {
          id: value,
          values: [3.4, 2, 0, -1],
        };
        resolve(data);
      }

      // switch default case

      function rejectCall() {
        reject({
          status: 400,
          message: "bad request",
        });
      }
    });
  };
};
