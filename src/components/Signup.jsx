import React from "react";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

const Signup = () => {
    const [opened, { open, close }] = useDisclosure(false);
  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="confirm-password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="confirm-password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="terms"
                      class="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <button
                        type="button"
                        onClick={open}
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Terms and Conditions
                      </button>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    href="#"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Modal opened={opened} size={"100%"} onClose={close}>
        <div class="p-6 max-w-[90%] mx-auto bg-gray-100 rounded-lg shadow-lg">
          <h1 class="text-2xl font-bold mb-4 text-center">
            Terms and Conditions
          </h1>

          <div class="space-y-4 text-gray-700">
            <div>
              <h2 class="text-xl font-semibold">1. Acceptance of Terms</h2>
              <p>
                By using this site, you agree to these terms. If you don't,
                please close this tab, but we'll be sad to see you go.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">2. Cookies</h2>
              <p>
                We use cookies, but not the kind you can eat. If you find any
                edible ones, we claim no responsibility for the crumbs in your
                keyboard.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">3. Privacy</h2>
              <p>
                Your privacy is as important to us as finding out who really let
                the dogs out. We promise to keep your secrets safe.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">4. User Responsibilities</h2>
              <p>
                Please don't break the site. It's fragile, like our hearts after
                the last season finale of our favorite show.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">5. Accuracy</h2>
              <p>
                We try to be accurate, but typos happen. If you find one, just
                pretend it's a quirky Easter egg.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">6. Third-Party Links</h2>
              <p>
                We link to other sites. If you get lost on the internet, we're
                not sending out a search party.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">7. Warranties</h2>
              <p>
                This site is provided “as is,” much like the leftovers you found
                in the fridge.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">8. Changes to Terms</h2>
              <p>
                We might change these terms whenever we feel like it. But don't
                worry, we'll keep the surprises to a minimum.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">9. Governing Law</h2>
              <p>
                These terms are governed by the laws of the Internet, and the
                occasional meme.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">10. Termination</h2>
              <p>
                If you misbehave, we reserve the right to kick you out. But,
                like, in a nice way.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">11. Limitation of Liability</h2>
              <p>
                If this site causes your cat to look at you weirdly, we can't be
                held responsible.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">12. User Conduct</h2>
              <p>
                No trolling, no spamming, and definitely no trying to hack into
                our database to find out what we're having for lunch.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">13. Intellectual Property</h2>
              <p>
                All content on this site belongs to us. Please don't steal it.
                We have ninjas (okay, not really, but still, don't).
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">14. Support</h2>
              <p>
                If you need help, feel free to reach out. We're here to
                assist... unless it's 3 AM, then we might be asleep.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">15. Acknowledgment</h2>
              <p>By reading this far, you've earned a virtual high five! 🖐</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Signup;

function Terms() {


  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        <div class="p-6 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg">
          <h1 class="text-2xl font-bold mb-4 text-center">
            Funny Terms and Conditions
          </h1>

          <div class="space-y-4 text-gray-700">
            <div>
              <h2 class="text-xl font-semibold">1. Acceptance of Terms</h2>
              <p>
                By using this site, you agree to these terms. If you don't,
                please close this tab, but we'll be sad to see you go.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">2. Cookies</h2>
              <p>
                We use cookies, but not the kind you can eat. If you find any
                edible ones, we claim no responsibility for the crumbs in your
                keyboard.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">3. Privacy</h2>
              <p>
                Your privacy is as important to us as finding out who really let
                the dogs out. We promise to keep your secrets safe.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">4. User Responsibilities</h2>
              <p>
                Please don't break the site. It's fragile, like our hearts after
                the last season finale of our favorite show.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">5. Accuracy</h2>
              <p>
                We try to be accurate, but typos happen. If you find one, just
                pretend it's a quirky Easter egg.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">6. Third-Party Links</h2>
              <p>
                We link to other sites. If you get lost on the internet, we're
                not sending out a search party.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">7. Warranties</h2>
              <p>
                This site is provided “as is,” much like the leftovers you found
                in the fridge.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">8. Changes to Terms</h2>
              <p>
                We might change these terms whenever we feel like it. But don't
                worry, we'll keep the surprises to a minimum.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">9. Governing Law</h2>
              <p>
                These terms are governed by the laws of the Internet, and the
                occasional meme.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">10. Termination</h2>
              <p>
                If you misbehave, we reserve the right to kick you out. But,
                like, in a nice way.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">11. Limitation of Liability</h2>
              <p>
                If this site causes your cat to look at you weirdly, we can't be
                held responsible.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">12. User Conduct</h2>
              <p>
                No trolling, no spamming, and definitely no trying to hack into
                our database to find out what we're having for lunch.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">13. Intellectual Property</h2>
              <p>
                All content on this site belongs to us. Please don't steal it.
                We have ninjas (okay, not really, but still, don't).
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">14. Support</h2>
              <p>
                If you need help, feel free to reach out. We're here to
                assist... unless it's 3 AM, then we might be asleep.
              </p>
            </div>

            <div>
              <h2 class="text-xl font-semibold">15. Acknowledgment</h2>
              <p>By reading this far, you've earned a virtual high five! 🖐</p>
            </div>
          </div>
        </div>
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </>
  );
}
