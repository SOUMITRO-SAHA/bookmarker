<div className="flex flex-col items-center justify-center">
        <div className="mb-8 text-center">
          <div className="text-xl text-slate-400">Bookmark</div>
          <div className="mt-5 text-3xl text-slate-200">Wellcome Back</div>
        </div>
        <Card className="w-[35rem] bg-slate-800 p-8 px-4">
          <CardContent>
            <div className="mb-2 dark:text-slate-300">Email</div>
            <Input placeholder="Email" />
          </CardContent>
          <CardContent>
            <PasswordField label="Password" id="password" autoComplete="off" />
          </CardContent>
          <CardContent className="flex items-center justify-center">
            <Button size={"lg"} className={cn("w-full")}>
              Sign In
            </Button>
          </CardContent>
          <CardContent>
            <div className="h-[1px] bg-slate-500 rounded-full my-3" />
          </CardContent>
          <CardContent className="flex items-center justify-center">
            <Button size={"lg"} variant={"outline"} className={cn("w-full")}>
              <span>
                <FaGoogle className="mr-2 " />
              </span>
              <span className="font-semibold">Sign In with Google</span>
            </Button>
          </CardContent>
          <CardContent className="flex items-center justify-center">
            <Button size={"lg"} variant={"outline"} className={cn("w-full")}>
              <span>
                <FaGoogle className="mr-2 " />
              </span>
              <span className="font-semibold">Sign In with Google</span>
            </Button>
          </CardContent>
        </Card>
      </div>