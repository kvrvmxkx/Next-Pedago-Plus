import { Button, buttonVariants } from '@/components/ui/button';
import { File, Link, Pencil, Play, Plus, Trash2 } from 'lucide-react';
import React, { forwardRef, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { cn } from '@/lib/utils';

const inputElement = [
  {
    name: "Video",
    type: "video",
    icon: Play,
  },
  {
    name: "Link",
    type: "link",
    icon: Link,
  },
  {
    name: "File",
    type: "file",
    icon: File,
  },

];

const template = {
  section: {
    name: "Introduction",
    session : [
      {
        name: "Presentation",
        content_type: "",
        value: ""
      }
    ]
  }
};

// add Level
// add program

const Structure = forwardRef<HTMLDivElement>(
  ({},ref)  => {

  const [program, setProgram] = useState([template]);
  const [sectionAriaCurrent, setSectionAriaCurrent] = useState(-1);
  const [sectionEditionName, setSectionEditionName] = useState("");

  const [sessionAriaCurrent, setSessionAriaCurrent] = useState("section-session");
  const [sessionEditionName, setSessionEditionName] = useState("");
  




  const addSection = () => {
    setProgram([...program, {
      section: {
        name: "Set section title",
        session : [
          {
            name: "Set session title",
            content_type: "",
            value: ""
          }
        ]
      }
    }]);
  }

  const removeSection = (index: number) => {
    setProgram(program.filter((_,i) => i !== index));
  }

  const editSectionName = (index: number, value: string) => {
    program[index].section.name = value;
    setProgram([...program]);

    setSectionEditionName("");
    setSectionAriaCurrent(-1);
  }


  const addSession = (index: number) => {
    //const count = program[index].section.session.length;

    program[index].section.session.push({
      name: "Set session title",
      content_type: "",
      value: ""
    });

    setProgram([...program]);
  }

  const removeSession = (sectionIndex: number, sessionIndex: number) => {
    program[sectionIndex].section.session.splice(sessionIndex,1);
    setProgram([...program]);
  }

  const editSessionName = (sectionIndex: number, sessionIndex: number, value: string) => {
    program[sectionIndex].section.session[sessionIndex].name = value;
    setProgram([...program]);

    setSessionEditionName("");
    setSessionAriaCurrent("section-session");
  }




  return (
    <div ref={ref}>
      {program.map((element, sectionKey) => <div key={sectionKey} className='bg-gray-100 py-5 px-5 mb-5 rounded-lg'>
        <div className='flex items-center group gap-2'>
          <p className='text-nowrap'>{`Section ${sectionKey+1}: ${element.section.name}`}</p> 
          <div className={`w-full pr-5 gap-1 aria-[current="false"]:hidden flex`} aria-current={sectionKey === sectionAriaCurrent}>
            <input value={sectionEditionName} onChange={(e) => setSectionEditionName(e.currentTarget.value)} className='bg-white px-2 border border-gray-300 py-1 w-full rounded-md' />
            <Button onClick={() => {editSectionName(sectionKey, sectionEditionName)}}>Save</Button>
            <Button onClick={() => {setSectionAriaCurrent(-1); setSectionEditionName("")}} >
              Cancel
            </Button>
          </div>
          <div className='items-center group-hover:aria-[current="false"]:flex hidden' aria-current={sectionKey === sectionAriaCurrent}>
            <button className='hover:bg-gray-200 p-1 rounded-md' onClick={() => {setSectionAriaCurrent(sectionKey); setSectionEditionName(element.section.name)}}>
              <Pencil size={15} />
            </button>
            <button className='hover:bg-gray-200 p-1 rounded-md' onClick={() => removeSection(sectionKey)}>
              <Trash2 size={15} />
            </button>
          </div>
        </div>
        <div className='p-5'>
          {element.section.session.map((session, sessionKey) => <div key={sessionKey} className='bg-white border border-gray-300 mb-3 rounded-md'>
            <Accordion type="single" collapsible>
              <AccordionItem value={`item-${sessionKey}`}>
                <AccordionTrigger className='p-2 hover:no-underline group [&[data-current=true]>svg]:hidden' data-current={`${sectionKey}-${sessionKey}` === sessionAriaCurrent} aria-current={`${sectionKey}-${sessionKey}` === sessionAriaCurrent}>
                  <div className='flex items-center gap-2 w-full'>
                    <p className='text-nowrap'>{`Session ${sessionKey+1}: ${session.name}`}</p>
                    <div className={`w-full gap-1 aria-[current="false"]:hidden flex`} aria-current={`${sectionKey}-${sessionKey}` === sessionAriaCurrent}>
                      <input value={sessionEditionName} onChange={(e) => setSessionEditionName(e.currentTarget.value)} className='border border-gray-300 px-2 py-1 w-full rounded-md' />
                      <div className={cn(buttonVariants())} onClick={() => {editSessionName(sectionKey, sessionKey, sessionEditionName)}}>Save</div>
                      <div className={cn(buttonVariants())} onClick={() => {setSessionAriaCurrent("section-session"); setSessionEditionName("")}} >
                        Cancel
                      </div>
                    </div>
                    <div className='relative'>
                      <div className='items-center inset-0 absolute group-hover:aria-[current="false"]:flex hidden' aria-current={`${sectionKey}-${sessionKey}` === sessionAriaCurrent}>
                        <div className='hover:bg-gray-200 p-1 rounded-md' onClick={() => {setSessionAriaCurrent(`${sectionKey}-${sessionKey}`); setSessionEditionName(session.name)}}>
                          <Pencil size={15}/>
                        </div>
                        <div className='hover:bg-gray-200 p-1 rounded-md' onClick={() => removeSession(sectionKey,sessionKey)}>
                          <Trash2 size={15}/>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </AccordionTrigger>
                <AccordionContent className='hidden'>
                  <hr className='border-gray-300' />
                  <div className='px-4 mb-4'>
                    <p className='text-xs mt-1 mb-5'>
                      Sélectionner le type principal de contenu. Des fichiers et des liens peuvent être ajoutés en tant que ressources.
                    </p>
                    {
                      !session.content_type ? <div className='flex gap-3 justify-center'>
                        {
                          inputElement.map((e) => <div key={e.type} className='h-20 w-20 border border-gray-300 flex flex-col items-center hover:bg-indigo-50'>
                            <div className='p-4' onClick={() => {}}>
                              <e.icon />
                            </div>
                            <div className='border-t border-gray-300 w-full'>
                              <p className='text-xs flex items-center justify-center my-auto py-1'>{e.name}</p>
                            </div>
                          </div>)
                        }
                      </div> 
                      : 
                      <div>
                        {session.content_type}
                      </div>
                    }
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>)
          }

          <Button onClick={() => addSession(sectionKey)} variant="outline" className='mt-3 border-primary text-primary hover:bg-indigo-50 hover:text-primary'>
            <Plus />
            Program element
          </Button>
        </div>

      </div>)}

      <Button onClick={addSection} variant="outline" className='mt-3 border-primary text-primary hover:bg-indigo-50 hover:text-primary'>
        <Plus />
        Section
      </Button>
    </div>
  )
})

Structure.displayName = "Structure";

export default Structure