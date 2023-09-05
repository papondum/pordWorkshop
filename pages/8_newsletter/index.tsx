import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import Head from "next/head";
import Image from "next/image";
import leftvt from "./8vt.svg";
import avartar from './People.png'
import rightvt from "./8_2vt.svg";
import vector from "./Vector.svg";
export default function Home() {
  const chatRef = useRef<HTMLInputElement>();
  const [email, setEmail] = useState<string>();
  const [alert, setAlert] = useState<boolean>(false);
  const [client, setClient] = useState<ListType[]>([
    { type: "left", text: "Hey man" },
    { type: "left", text: "Hey man1" },
    { type: "left", text: "Hey man1" },


    // { type: "right", text: "This is the book kook kook kook kook" },

    {
      type: "right",
      text: "Hey, Thanks for Shoping. if you have any question, I’m here to help! 😑",
    },
    // { type: "right", text: "This is the book kook kook kook kook" },
    // { type: "right", text: "This is the book kook kook kook kook" },
    // { type: "right", text: "This is the book kook kook kook kook" },
    // { type: "right", text: "Good bye" },
    // { type: "left", text: "Hey man1" },
  ]);
  const [chat, setChat] = useState<string>("");
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTo(0, chatRef.current.scrollHeight, "smooth");
    }
  }, [client]);
  function _onEmailChange(e) {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value) ||
      e.target.value == ""
    ) {
      setAlert(false);
    } else {
      setAlert(true);
    }
    setEmail(e.target.value);
  }

  function _onChatChange(e: React.ChangeEvent<HTMLInputElement>) {
    setChat(e.target.value);
  }
  function updateChat() {
    if (chat.trim().length !== 0) {
      setClient([...client, { type: "left", text: chat }]);
    }
    setChat("");
  }
  function _onKeyDown(e: KeyboardEvent<HTMLImageElement>) {
    if (e.key == "Enter") {
      updateChat();
      setChat("");
    }
  }
  function _onEmailKeyDown(e: KeyboardEvent<HTMLImageElement>) {
    if (e.key == "Enter") {
      if (!alert) {
        setEmail("");
      }
    }
  }
interface ListType {
  type: string;
  text: string;
}
  function _positionChecker(current: string, list: ListType[], index: number) {
    if (index - 1 <= 0 || list[index - 1]?.type !== current) {
      // first of type compare prior index type
      return current == "left" ? `rounded-bl-none` : `rounded-br-none`;
    } else if (
      index + 1 > list.length - 1 ||
      list[index + 1]?.type !== current
    ) {
      // last of type if its have next index
      return current == "left" ? `rounded-tl-none` : `rounded-tr-none`;
    } else {
      // middle
      return current == "left" ? `rounded-l-none` : `rounded-r-none`;
    }
  }
  function _renderAvatar(pos: string, index:number, next: object) {
    if (pos === "rounded-br-none") {
      if (index - 1 >= 0 && !next) {
        return true;
      }
      return false;
    }
    if (pos === "rounded-tr-none") {
      return true;
    }
    return false;
    //                           client[index - 1].type !== i.type)
  }
  return (
    <div className="container mx-auto flex h-screen items-center justify-center">
      <main className="relative h-full max-h-[391px] w-full bg-base">
        <div className="pointer-events-none absolute left-0">
          <Image src={leftvt} />
        </div>
        <div className="absolute right-0 top-6">
          <Image src={rightvt} />
        </div>
        <div className="flex h-full justify-items-center pl-main-left pr-main-right">
          <div className="flex flex-1 items-center">
            <div className="font-poppins relative">
              <div className="max-w-[287px] mr-11">
                <h2 className="mb-3 tracking-[6px] text-h2">NEWSLETTER</h2>
                <h1 className="mb-11 text-h1 font-semibold">
                  Subscribe Our Newsletter
                </h1>
              </div>
              <div className="relative h-full">
                <input
                  className="font-poppins max-h-[75px] w-full max-w-[335px] py-[27px] pl-[30px] outline-none"
                  type="text"
                  onChange={_onEmailChange}
                  onKeyDown={_onEmailKeyDown}
                  placeholder="enter you mail .."
                  value={email}
                />
                <button className="absolute right-3.5 top-[16%] h-full max-h-[50px] w-full max-w-[50px] bg-arrow text-xl text-white">
                  →
                </button>
              </div>
              {alert && (
                <p className="absolute text-red-400">this is not mail</p>
              )}
            </div>
          </div>
          <div className="m-w-[248px] flex h-full flex-1 items-end justify-end self-end">
            <div className="w-full max-w-[385px]">
              <div className="flex h-full max-h-[342px] flex-1 flex-col justify-end before:absolute before:bottom-0 before:h-full before:max-h-[342px] before:w-full before:max-w-[290px] before:bg-chat">
                <div
                  className="font-poppins z-0 ml-[7.796%] mt-[7.796%] pb-[5.978%] overflow-auto text-chat text-black scrollbar-hide"
                  ref={chatRef}
                >
                  {client.map((i, index) => {
                    const chatPosition = _positionChecker(i.type, client, index);

                    if (i.type == "left") {
                      const compiled = `my-[9px] w-fit break-words shadow-lg rounded-4xl ${chatPosition} bg-b-client p-[6.72%] text-sm text-white`;
                      return (
                        <div className={compiled} key={index}>
                          <div>{i.text}</div>
                        </div>
                      );
                    }

                    // if next chat position is right or current position is
                    return (
                      <div className="flex flex-row items-end" key={index}>
                        <div
                          className={`shadow-lg my-[9px] ml-auto flex w-fit rounded-4xl ${chatPosition} max-w-[249px] bg-white p-[6.72%]`}
                        >
                          {i.text}
                        </div>
                        <div className="mb-[3.42857143%] ml-[3.42857143%] w-full max-w-[32px]">
                          {_renderAvatar(chatPosition, index, client[index+1]) && (
                            <div className=" h-[32px] max-h-[32px] w-full rounded-full bg-chat">
                              <Image src={avartar} />
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div
                  className={`pr-auto flex justify-center relative max-h-[61px] ml-[6.234%] mb-[6.756%] flex max-w-[240px] justify-end rounded-full border-2 border-border`}
                >
                  <input
                    value={chat}
                    className="text-b-color text-13 font-poppins max-h-[61px] w-full max-w-[240px] bg-transparent py-[27px] pl-[30px] outline-none placeholder:text-b-color"
                    type="text"
                    onChange={_onChatChange}
                    onKeyDown={_onKeyDown}
                    placeholder="Write message .."
                  />
                  <button
                    onClick={updateChat}
                    className="absolute right-2 top-[8%] h-full max-h-[50px] w-full max-w-[50px] rounded-full bg-white text-xl text-white"
                  >
                    <div>
                      <Image src={vector} />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
