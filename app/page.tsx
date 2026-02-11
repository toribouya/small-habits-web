"use client";

import { useState } from "react";

export default function Home() {
  const [done, setDone] = useState(false);

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">
        習慣化の最初の一歩を踏み出そう
      </h1>

      <p className="mt-4">
        続かなかった過去があっても大丈夫。今日は「やるか、やらないか」を決めるだけ。
      </p>

      <button className="mt-4 rounded bg-black px-4 py-2 text-white">
        今日の一歩を踏み出す
      </button>

      <hr className="my-6" />

      <h2 className="text-xl font-semibold">今日やること</h2>

      <label className="mt-2 block cursor-pointer">
        <input
          type="checkbox"
          className="mr-2"
          checked={done}
          onChange={() => setDone(!done)}
        />
        深呼吸を1回する
      </label>

      {done && (
        <p className="mt-4 text-green-600">
          今日はこれで十分。
        </p>
      )}
    </main>
  );
}
