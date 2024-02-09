import TaskSection from "@/src/components/Task/Section";

export default function Home() {
  return (
    <main className="p-5">
      <div className="flex flex-col gap-10">
        <TaskSection title="시작 전" TaskStatus="not_started" />
        <TaskSection title="진행 중" TaskStatus="progress" />
        <TaskSection title="지연" TaskStatus="pending" />
        <TaskSection title="완료" TaskStatus="completed" />
      </div>
    </main>
  );
}
