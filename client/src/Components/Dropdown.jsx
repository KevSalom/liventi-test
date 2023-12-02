import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useCompanyContext } from '../state/CompanyContext'
import { useNavigate } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
  const {companies} = useCompanyContext()
  const navigate = useNavigate();
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
              navigate(`/selected/${selected.id}`)
            }}
            className="h-[60px] rounded-[10px] bg-gray-900 text-gray-200 lg:text-xl w-full mt-2"
          >
            {`See ${selected?.fields.company_name} details`}
          </button>
        )}
      </div>
    );
  }