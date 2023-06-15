import AccountContent from "./content";

const Account = () => {
  return (
    <div
      className="
        bg-neutral-900
        rounded-lg
        h-full
        w-full
        overflow-hidden
        overflow-y-auto
      "
    >
      <div className="mb-2 flex flex-col gap-y-6">
        <h1 className="text-white text-3xl font-semibold">Account Settings</h1>
      </div>
      <AccountContent />
    </div>
  );
};

export default Account;
