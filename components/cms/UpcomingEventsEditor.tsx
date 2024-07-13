"use client";

import styled from "styled-components";
import { PiTrashThin, PiCheckThin } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Event } from "@/app/cms/page";
import about1 from "@/public/images/about/about1.png";
import { PageContainer } from "../PageContainer";

type Props = {
  events: Event[];
};

export function UpcomingEventsEditor({ events }: Props) {
  const [newEvent, setNewEvent] = useState<Event>({ date: "", text: "" });
  const router = useRouter();

  async function handleDelete(event: Event) {
    if (confirm(`Willst du dieses event wirklich löschen?`) == true) {
      const body = events.filter((elem) => elem !== event);
      const response = await fetch("/api/upcoming/", {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.refresh();
      } else {
        console.error(response.status);
      }
    }
  }

  async function handleAdd() {
    if (confirm(`Willst du dieses event wirklich hinzufügen?`) == true) {
      const body = events ? [...events, newEvent] : [newEvent];
      const response = await fetch("/api/upcoming/", {
        method: "PUT",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        router.refresh();
        setNewEvent({ date: "", text: "" });
      } else {
        console.error(response.status);
      }
    }
  }

  return (
    <PageContainer
      headline="editor"
      backgroundImage={about1}
      altText="A black and white photograph capturing a dimly lit, intimate table setting. The table is adorned with several glasses, bottles, and a lit candle, creating a cozy ambiance. In the background, a foggy window displays drawings of hearts and abstract shapes, possibly made by someone using their finger. Small dots of light are visible through the window, adding to the warm and inviting atmosphere. The foreground features a cloth with a simple, elegant pattern. The overall scene evokes a sense of romance and quiet celebration."
    >
      <SectionContainer>
        <InputContainer>
          <h4>Neues Event</h4>
          <p>Datum/Zeit:</p>
          <input
            type="text"
            value={newEvent.date}
            onChange={(e) =>
              setNewEvent((prev) => ({ ...prev, date: e.target.value }))
            }
          />

          <p>Text/Location:</p>
          <input
            type="text"
            value={newEvent.text}
            onChange={(e) =>
              setNewEvent((prev) => ({ ...prev, text: e.target.value }))
            }
          />

          <Button onClick={() => handleAdd()}>
            <PiCheckThin />
          </Button>
        </InputContainer>

        {events?.length > 0 ? (
          <b>Diese Events werden auf der popup-seite angezeigt:</b>
        ) : (
          <b>Es werden keine Events auf der popup-Seite angezeigt.</b>
        )}

        {events?.length > 0 &&
          events.map((event: Event) => {
            return (
              <LocationElement key={event.text}>
                <p>
                  {event.date}
                  <br />
                  {event.text}
                </p>
                <Button onClick={() => handleDelete(event)}>
                  <PiTrashThin />
                </Button>
              </LocationElement>
            );
          })}
      </SectionContainer>
    </PageContainer>
  );
}

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 30px;
  padding: 20px;
  border: thin solid black;
  background: white;
  z-index: 2;
`;

const LocationElement = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  border: thin solid black;
  padding: 10px;
  p {
    flex: 1;
    font-size: 16px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    margin-bottom: 10px;
  }
  input {
    flex: 1;
    height: 30px;
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  border: thin solid black;
  border-radius: 3px;
  background: none;
  height: 50px;
  width: 50px;
  transition: all 0.2s;
  align-self: flex-end;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px grey;
  }
  * {
    font-size: 28px;
  }
`;
