import React from "react";
import { Dropdown } from "flowbite-react";
import JobResults from "../../components/JobResults";
import {
  FaFilter,
  FaLocationArrow,
  FaBuilding,
  FaMoneyBill,
  FaRegClock,
  FaPersonBooth,
  FaPeopleArrows,
  FaSchool,
} from "react-icons/fa";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../styles/theme";

const Results = () => {
  return (
    <div className="pt-16 min-h-screen w-full flex lg:flex-row sm:flex-col flex-col">
      <div className="pt-10 px-10 bg-white w-1/3 overflow-y-auto custom-scrollbar">
        <form class="max-w-screen mx-auto" style={{ width: "100%" }}>
          <div class="relative">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
              style={{ width: "100%" }}
            >
              <svg
                class="w-4 h-4 text-[#30526A]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for internships"
              required
              style={{ borderColor: "#30526A" }}
            />
          </div>
        </form>
        <h3 className="text-2xl my-5">
          Search results for{" "}
          <span className="font-semibold">"internships"</span>
        </h3>

        <div className="flex flex-row gap-3">
          <div className="flex flex-col gap-5 w-1/5">
            <Dropdown
              label="Sort by"
              className="bg-white text-start"
              dismissOnClick={false}
              style={{
                width: "100%",
                backgroundColor: "white",
                color: "gray",
                borderColor: "#30526A",
              }}
            >
              <Dropdown.Item>Category 1</Dropdown.Item>
              <Dropdown.Item>Category 2</Dropdown.Item>
            </Dropdown>
          </div>
          <div className="flex flex-col w-1/5">
            <Dropdown
              label="Within"
              className="bg-white text-start"
              dismissOnClick={false}
              style={{
                width: "100%",
                backgroundColor: "white",
                color: "gray",
                borderColor: "#30526A",
              }}
            >
              <Dropdown.Item>Category 1</Dropdown.Item>
              <Dropdown.Item>Category 2</Dropdown.Item>
            </Dropdown>
          </div>

          <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="relative w-11 h-6 bg-gray-200  rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span class="ms-3 font-medium text-gray-900 dark:text-gray-300 text-md">
              Alerts on
            </span>
          </label>
        </div>
        <div className="my-6 flex flex-col gap-4">
          <JobResults />
          <JobResults />
          <JobResults />
          <JobResults />
          <JobResults />
        </div>
      </div>
      <div className="bg-white text-slate-800 w-2/3 p-16 flex flex-col overflow-y-auto custom-scrollbar">
        <h1 className="text-5xl font-semibold mb-3 text-[#056480]">
          Software Engineer Intern
        </h1>
        <p className="text-xl mb-8">FactSet. Makati, NCR, Philippines</p>
        <div className="flex flex-col gap-2 mb-12">
          <div className="flex flex-row gap-4">
            <FaMoneyBill className="text-2xl text-[#056480]" />
            <p>Paid internship</p>
          </div>
          <div className="flex flex-row gap-4">
            <FaRegClock className="text-2xl text-[#056480]" />
            <p>Actively hiring</p>
          </div>
          <div className="flex flex-row gap-4">
            <FaSchool className="text-2xl text-[#056480]" />
            <p>For academic requirements only</p>
          </div>
        </div>
        <div>
          <p className="font-semibold text-xl mb-2 text-[#056480]">
            Role Description
          </p>
          <p className="my-5">
            Quo eros gravida suscipit class totam aptent voluptas culpa!
            Suspendisse! Eaque risus, sed suscipit? Incididunt aptent orci
            perferendis penatibus suspendisse, quaerat sit parturient ipsum.
            Gravida, hac mi architecto egestas nonummy? Sapiente ultricies sit,
            enim non habitant? Pretium netus, consequat est hic error, quisquam
            nemo aliquip beatae, eu ratione orci, vulputate culpa, cillum mi
            pariatur, proin pharetra! Incididunt! Urna potenti integer quasi per
            perferendis semper, inceptos molestiae, dicta arcu cras deserunt
            egestas mus illo non dis tempore praesentium, non autem pede.
            <br />
            <br />
            Nulla parturient assumenda explicabo voluptatibus minus quam, risus,
            purus fugiat quia adipisci incidunt incidunt? Hic, animi. Rem anim
            anim repudiandae aut parturient fusce netus phasellus illo. Quam
            deserunt parturient fermentum enim nullam auctor vehicula provident
            officiis, turpis inventore tempora, consequuntur tristique facilisi
            hic, posuere! Convallis! Sed ornare tortor, dictum laborum litora
            elit malesuada necessitatibus! Ex quod placerat lacinia, dolorem
            labore eos voluptas rutrum? Faucibus excepturi autem aenean aenean.
            Semper facilisi iusto vivamus, nesciunt commodi fusce? Nemo,
            corporis reprehenderit duis quidem.
            <br />
            <br />
            Ab quas netus vestibulum auctor rutrum tempor, tenetur minus eros
            occaecat magnis, placerat torquent. Nihil tincidunt tincidunt mattis
            conubia maecenas quibusdam? Aenean scelerisque, molestiae. Quo quos
            nisi nesciunt, dictumst curae potenti nam aliquam delectus vulputate
            etiam hendrerit leo, aute sequi rutrum ratione! Vero turpis quasi?
            Doloribus ab minima nisi pariatur reprehenderit suscipit feugiat
            platea montes! Deserunt ratione autem, laboris mattis, tempora
            dolore purus, laudantium minima unde, magni lacus dolore lacinia
            aute dapibus etiam ut auctor! Mus purus perspiciatis, aspernatur
            cupidatat.
            <br />
            <br />
            Odit adipiscing quae. Convallis vel est, nisi litora commodo,
            inceptos nunc magna quae lorem? Praesent vitae cupiditate magnis,
            tempore quidem lobortis maecenas, risus nec ratione vulputate,
            doloremque doloremque dolore tempus hac convallis error est delectus
            qui curabitur officiis assumenda quis nesciunt sollicitudin. Ea
            torquent mollitia! Condimentum laudantium officiis fames dapibus,
            quod ratione atque tempor. Atque vel dolorem? Officia! Maiores
            placerat accumsan in! Purus, nunc iste eos egestas placeat vivamus
            eos itaque sagittis? Phasellus placeat quasi fugit incidunt iaculis
            gravida qui.
          </p>
          <p className="font-semibold text-xl my-5 text-[#056480]">
            Requirements
          </p>
          <ul className="list-disc ml-6 mt-2">
            {" "}
            {/* Apply appropriate margin and list style */}
            <li>
              Posuere sollicitudin. Class cupiditate nascetur habitasse id
              animi! Natus, pharetra natus per semper delectus, tempore.
            </li>
            <li>
              Posuere sollicitudin. Class cupiditate nascetur habitasse id
              animi! Natus, pharetra natus per semper delectus, tempore.
            </li>
            <li>
              Posuere sollicitudin. Class cupiditate nascetur habitasse id
              animi! Natus, pharetra natus per semper delectus, tempore.
            </li>
          </ul>
          <p className="font-semibold text-xl my-5 text-[#056480]">
            About the Company
          </p>
          <p>
            Quo eros gravida suscipit class totam aptent voluptas culpa!
            Suspendisse! Eaque risus, sed suscipit? Incididunt aptent orci
            perferendis penatibus suspendisse, quaerat sit parturient ipsum.
            Gravida, hac mi architecto egestas nonummy? Sapiente ultricies sit,
            enim non habitant? Pretium netus, consequat est hic error, quisquam
            nemo aliquip beatae, eu ratione orci, vulputate culpa, cillum mi
            pariatur, proin pharetra! Incididunt! Urna potenti integer quasi per
            perferendis semper, inceptos molestiae, dicta arcu cras deserunt
            egestas mus illo non dis tempore praesentium, non autem pede.
            <br />
          </p>
        </div>
        <div className="flex flex-row justify-center mt-16">
          <button
            type="button"
            class="text-white bg-[#056480] hover:bg-[#056380d5] w-1/3 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Apply now
          </button>
          <button
            type="button"
            class="text-white bg-[#056480] hover:bg-[#056380d5] w-1/3 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Save for later
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
