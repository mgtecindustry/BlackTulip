import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Clock } from "lucide-react";

export default function ContactData() {
  return (
    <div className="flex flex-col mb-12">
      <Card className="w-full shadow-xl rounded-none">
        <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-1">
          <CardHeader className="p-6 md:p-20">
            <CardTitle className="text-center text-2xl md:text-3xl font-bold text-white">
              Contactează-ne
            </CardTitle>
          </CardHeader>
        </div>
        <CardContent className="p-6 md:p-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 text-center mb-6">
            {[
              {
                icon: Phone,
                text: "+40 747 092 711",
                ariaLabel: "Număr de telefon",
              },
              {
                icon: Clock,
                text: (
                  <div className="flex flex-col">
                    <p className="text-lg">Luni-Joi: 09:00 - 23:00</p>
                    <p className="text-lg">Vineri: 09:00 - 00:00</p>
                    <p className="text-lg">Sâmbătă: 10:00 - 01:00</p>
                    <p className="text-lg mb-4 sm:mb-8">
                      Duminică: 10:00 - 00:00
                    </p>
                  </div>
                ),
                ariaLabel: "Orele de funcționare",
              },
              {
                icon: Mail,
                text: "terasa@blacktulip.com",
                ariaLabel: "Adresă de email",
              },
            ].map(({ icon: Icon, text, ariaLabel }, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="p-3 rounded-full bg-gray-600 shadow-md mb-2 group-hover:bg-orange-400 transition-all duration-300">
                  <Icon
                    size={24}
                    className="text-white"
                    aria-label={ariaLabel}
                  />
                </div>
                <span className="text-gray-300 font-medium">{text}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Button
              onClick={() =>
                (window.location.href = "mailto:terasa@blacktulip.com")
              }
              className="flex items-center gap-4 mt-6 bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail size={20} />
              Trimite un email
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
