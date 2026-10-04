export default function MapEmbed() {
  return (
    <div className="glass-panel p-2 rounded-3xl overflow-hidden border border-gray-200 shadow-md h-full min-h-[380px] flex flex-col">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.4427699402277!2d74.24787867506669!3d31.457004150270993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190362d0c87ebd%3A0x92b6c09414c527d2!2sBaqiatullah%20Orphanage%20-%20Baqiatullah%20Foundation!5e0!3m2!1sen!2s!4v1759386915850!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: "380px" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Baqiatullah Foundation Orphanage Location"
        className="rounded-2xl flex-1 w-full"
      />
    </div>
  );
}
