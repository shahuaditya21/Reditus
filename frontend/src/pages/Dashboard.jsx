import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import Card from "../components/common/Card";

function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <div className="space-y-8">

      {/* Welcome Section */}

      <section>
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome back 👋
        </h1>

        <p className="text-gray-600 mt-2">
          {currentUser?.email}
        </p>

        <p className="text-gray-500 mt-4 max-w-2xl">
          Manage your lost and found reports, browse community posts,
          and help reunite people with their belongings.
        </p>
      </section>

      {/* Statistics */}

      <section>

        <h2 className="text-2xl font-semibold mb-5">
          Overview
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <Card>
            <h3 className="text-gray-500">
              Lost Reports
            </h3>

            <p className="text-4xl font-bold mt-4">
              0
            </p>
          </Card>

          <Card>
            <h3 className="text-gray-500">
              Found Reports
            </h3>

            <p className="text-4xl font-bold mt-4">
              0
            </p>
          </Card>

          <Card>
            <h3 className="text-gray-500">
              Successful Matches
            </h3>

            <p className="text-4xl font-bold mt-4">
              0
            </p>
          </Card>

        </div>

      </section>

      {/* Quick Actions */}

      <section>

        <h2 className="text-2xl font-semibold mb-5">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <Link to="/lost">

            <Card className="hover:shadow-xl transition duration-300 cursor-pointer">

              <h3 className="text-xl font-semibold">
                📦 Report Lost Item
              </h3>

              <p className="text-gray-500 mt-3">
                Create a report for something you've lost.
              </p>

            </Card>

          </Link>

          <Link to="/found">

            <Card className="hover:shadow-xl transition duration-300 cursor-pointer">

              <h3 className="text-xl font-semibold">
                🎒 Report Found Item
              </h3>

              <p className="text-gray-500 mt-3">
                Help someone by reporting an item you found.
              </p>

            </Card>

          </Link>

        </div>

      </section>

      {/* Activity */}

      <section>

        <h2 className="text-2xl font-semibold mb-5">
          Recent Activity
        </h2>

        <Card>

          <p className="text-gray-500">
            No activity yet.
          </p>

          <p className="text-gray-400 mt-2">
            Start by reporting your first lost or found item.
          </p>

        </Card>

      </section>

    </div>
  );
}

export default Dashboard;