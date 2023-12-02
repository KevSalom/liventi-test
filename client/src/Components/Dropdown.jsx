import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useCompanyContext } from '../state/CompanyContext'

const people = [
  {
    id: 1,
    name: 'Wade Cooper',
    avatar:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    avatar:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Devon Webb',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'Tom Cook',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'Tanya Fox',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    name: 'Hellen Schmidt',
    avatar:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 7,
    name: 'Caroline Schultz',
    avatar:
      'https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 8,
    name: 'Mason Heaney',
    avatar:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 9,
    name: 'Claudie Smitham',
    avatar:
      'https://images.unsplash.com/photo-1584486520270-19eca1efcce5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 10,
    name: 'Emil Schaefer',
    avatar:
      'https://images.unsplash.com/photo-1561505457-3bcad021f8ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
  const {companies} = useCompanyContext()

  console.log(companies)
    const [selected, setSelected] = useState(null);
    const [showButton, setShowButton] = useState(false);
  
    const handleSelect = (company) => {
      setSelected(company);
      setShowButton(true);
    };
  
    return (
      <div className="relative mt-2 mb-10 ">
        <Listbox value={selected} onChange={handleSelect}>
          {({ open }) => (
            <>
              <Listbox.Button className="relative w-full cursor-default bg-white h-[60px] rounded-[10px]  pl-3 pr-10 text-left text-gray-950 shadow-sm  focus:outline-none focus:ring-2 focus:ring-indigo-500  text-[25px] font-[500] border-2 border-gray-950">
                <span className="flex items-center">
                  <span className="ml-3 block truncate">{selected ? selected.fields.company_name : 'My companies'}</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
  
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-2 max-h-80 w-full overflow-auto rounded-md bg-gray-200 shadow-lg  ring-black ring-opacity-5 focus:outline-none sm:text-sm border-2 border-gray-800 mb-10">
                  {companies?.map((company) => (
                    <Listbox.Option
                      key={company.id}
                      className={({ active }) =>
                        classNames(
                          active ? 'bg-gray-700 text-white' : 'text-gray-900 bg-gray-200 transition-colors',
                          'relative cursor-pointer select-none pl-3 pr-9 h-[60px] flex items-center text-[20px] font-[100] border-b-2 border-gray-800 active:bg-gray-950'
                        )
                      }
                      value={company}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block')}>
                              {company.fields.company_name}
                            </span>
                          </div>
                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-gray-800',
                                'absolute inset-y-0 right-0 flex items-center pr-6'
                              )}
                            >
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </>
          )}
        </Listbox>
  
        {showButton && (
          <button
            onClick={() => {
              // Aquí puedes poner la lógica que desees al hacer clic en el botón
              console.log('Button clicked');
            }}
            className="h-[60px] rounded-[10px] bg-gray-900 text-gray-200 lg:text-xl w-full mt-2"
          >
            {`See ${selected?.fields.company_name} details`}
          </button>
        )}
      </div>
    );
  }