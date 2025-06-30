import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import useAuthService from "@/services/authservice";

interface LoginFormInputs {
    email: string;
    password: string;
}

const Login = () => {
    const authService = useAuthService();
    const form = useForm<LoginFormInputs>({
        defaultValues: { email: "", password: "" },
    });
    const navigate = useNavigate();

    const onSubmit = (data: LoginFormInputs) => {
        try {
            // TODO: Implement authentication logic here, e.g.:
            // await authService.login(data.email, data.password);
        } catch (error) {
            // Handle error (e.g., show error message)
        }
        navigate("/profile");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
            <Header />
            <div className="flex flex-1 items-center justify-center">
                <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={form.control}
                                name="email"
                                rules={{ required: "Email is required" }}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="Enter your email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                rules={{ required: "Password is required" }}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="Enter your password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Sign In</Button>
                        </form>
                    </Form>
                    <div className="text-center mt-4">
                        <span className="text-sm text-slate-600">Don't have an account? </span>
                        <Link to="/register" className="text-blue-600 hover:underline">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login; 