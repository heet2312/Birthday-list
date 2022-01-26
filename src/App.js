import React, { useState } from 'react';



let count=3;
const App = () => {
     const [person, setPerson] = useState( [ {
        id:0,
        img:"https://www.freepik.com/free-photo/close-up-young-man-looking-camera-against-grey-wall_4435470.htm#page=1&query=profile%20picture&position=7&from_view=search",
        name:"John Smith",
        age:"29 years",
      },
      {
        id:1,
        img:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1494790108377-be9c29b29330%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fprofile-picture&tbnid=SsGCLunXgu6i1M&vet=12ahUKEwjpkoDygLb0AhXEEHIKHXClCccQMygVegUIARDuAQ..i&docid=gMlIcsQMiG-F2M&w=1000&h=1500&q=profile%20img&ved=2ahUKEwjpkoDygLb0AhXEEHIKHXClCccQMygVegUIARDuAQ",
        name:"Lola Gardner",
        age:"24 years",
      },
      {
        id:2,
        img:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1494790108377-be9c29b29330%3Fixlib%3Drb-1.2.1%26ixid%3DMnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8%26w%3D1000%26q%3D80&imgrefurl=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fprofile-picture&tbnid=SsGCLunXgu6i1M&vet=12ahUKEwjpkoDygLb0AhXEEHIKHXClCccQMygVegUIARDuAQ..i&docid=gMlIcsQMiG-F2M&w=1000&h=1500&q=profile%20img&ved=2ahUKEwjpkoDygLb0AhXEEHIKHXClCccQMygVegUIARDuAQ',
        name:"Adam Milne",
        age:"34 years",
      },] );

    const clearAll = () => {
      setPerson([]);
      count=0;
    }
    return (
        <div className="card">
        <h2 className="Heading">{count} Birthdays Today</h2>
        {person.map((person) => {
        const { id,img, name,age } = person;
        return (
          <div key={id} className='Person'>
            <img src="{img}" alt="" srcset="" />
            <div>
                <h3>{name}</h3>
                <p>{age}</p>
            </div>
          </div>
        );
      }) }
      <button type="button" className="btn" onClick={clearAll}>clear all</button>
      </div>
    )
}

export default App
