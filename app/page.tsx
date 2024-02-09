import TaskSection from "@/src/components/Task/Section";

export default function Home() {
  return (
    <main className="p-5">
      <div className="flex flex-col gap-10">
        <TaskSection title="시작 전" taskStatus="not_started" />
        <TaskSection title="진행 중" taskStatus="progress" />
        <TaskSection title="지연" taskStatus="pending" />
        <TaskSection title="완료" taskStatus="completed" />
      </div>
    </main>
  );
}
