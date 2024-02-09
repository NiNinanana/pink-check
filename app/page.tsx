import TaskSection from "@/src/components/Task/Section";

export default function Home() {
  return (
    <main className="p-5">
      <div className="flex flex-col gap-10">
        <TaskSection title="시작 전" taskKey="not_started" />
        <TaskSection title="진행 중" taskKey="progress" />
        <TaskSection title="지연" taskKey="pending" />
        <TaskSection title="완료" taskKey="completed" />
      </div>
    </main>
  );
}
